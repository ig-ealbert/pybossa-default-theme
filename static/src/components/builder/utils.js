import Mustache from 'mustache';
import textInputTemplate from './components/TextInput/textInputTemplate.html';
import checkboxInputTemplate from './components/CheckboxInput/checkboxInputTemplate.html';
import checkboxGroupTemplate from './components/CheckboxInput/checkboxGroupTemplate.html';
import tableTemplate from './components/Table/tableTemplate.html';
import labelTemplate from './components/templates/labelTemplate.html';
import textInputColumnTemplate from './components/Table/textInputColumnTemplate.html';
import checkboxInputColumnTemplate from './components/Table/checkboxInputColumnTemplate.html';
import timerTemplate from './components/helpers/timerTemplate.html';
import taskPresenterTemplate from './components/helpers/taskPresenterTemplate.html';
import cancelButtonTemplate from './components/helpers/cancelButtonTemplate.html';
import buttonRowTemplate from './components/helpers/buttonRowTemplate.html';
import submitButtonTemplate from './components/helpers/submitButtonTemplate.html';
import submitLastButtonTemplate from './components/helpers/submitLastButtonTemplate.html';
import slotTemplate from './components/Table/slotTemplate.html';
import radioGroupTemplate from './components/RadioInput/radioGroupTemplate.html';
import radioInputTemplate from './components/RadioInput/radioInputTemplate.html';
import textTaggingTemplate from './components/TextTagging/textTaggingTemplate.html';
import dropdownTemplate from './components/DropdownInput/dropdownTemplate.html';
import { flatten, uniq, flow } from 'lodash';

export const templates = {
  TEXT_INPUT: textInputTemplate,
  CHECKBOX_INPUT: checkboxInputTemplate,
  TABLE: tableTemplate,
  TEXT_INPUT_COLUMN: textInputColumnTemplate,
  CHECKBOX_INPUT_COLUMN: checkboxInputColumnTemplate,
  TIMER: timerTemplate,
  TASK_PRESENTER: taskPresenterTemplate,
  CANCEL_BUTTON: cancelButtonTemplate,
  BUTTON_ROW: buttonRowTemplate,
  SUBMIT_BUTTON: submitButtonTemplate,
  SUBMIT_LAST_BUTTON: submitLastButtonTemplate
};
export default {
  uniqueID () {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  },

  getSnippet (component, form) {
    if (component === 'TABLE') {
      return this.getTableCode(form);
    } else if (component === 'CHECKBOX_INPUT') {
      return this.getCheckboxInputCode(form, component);
    } else if (component === 'RADIO_INPUT') {
      return this.getRadioGroupCode(form);
    } else if (component === 'TEXT_INPUT') {
      return this.getTextInputCode(form, component);
    } else if (component === 'TEXT_TAGGING') {
      return this.getTextTaggingCode(form);
    } else if (component === 'DROPDOWN_INPUT') {
      return this.getDropdownCode(form);
    } else {
      return this.getHelperComponentCode(component);
    }
  },
  addBindSymbolIfNeedIt (obj, output) {
    Object.keys(obj).forEach(e => {
      if (obj[e].isVariable) {
        output = output.replace(`${e}=`, `:${e}=`);
      }
    });

    return output;
  },

  getValuesForTemplate (obj) {
    const values = {};
    Object.keys(obj).forEach(e => {
      if (obj[e].isVariable !== undefined) {
        values[e] = obj[e].value;
      } else {
        values[e] = obj[e];
      }
    });
    return values;
  },

  getTableCode (form) {
    const columns = form.columns.map(col => col.name);

    const formForTemplate = {
      name: form.name,
      data: !form.data.isVariable
        ? JSON.stringify(form.data.list)
        : form.data.value
          ? form.data.value
          : '',
      columns: JSON.stringify(columns),
      options: JSON.stringify(form.options, null, '\t')
    };

    const slotColumns = form.columns.filter(
      col => col.component !== 'plain-text'
    );
    const slots = [];
    let isInputTable = false;
    slotColumns.forEach(function (col) {
      if (col.component === 'checkbox-input') {
        const columnComponent = Mustache.render(
          checkboxInputColumnTemplate,
          col
        );
        slots.push(
          Mustache.render(slotTemplate, {
            name: col.name,
            component: columnComponent
          })
        );
        isInputTable = true;
      } else if (col.component === 'text-input') {
        const columnComponent = Mustache.render(textInputColumnTemplate, col);
        slots.push(
          Mustache.render(slotTemplate, {
            name: col.name,
            component: columnComponent
          })
        );
        isInputTable = true;
      }
    });
    const tableTemplate = !isInputTable
      ? templates.TABLE.replace("name='{{name}}'\n  ", '')
      : templates.TABLE;
    const output = Mustache.render(tableTemplate, {
      ...formForTemplate,
      slots
    });

    return output;
  },

  getHelperComponentCode (component) {
    return Mustache.render(templates[component], {});
  },

  getCheckboxInputCode (form, component) {
    const checkboxList = [];

    form.checkboxList.forEach(checkbox => {
      const formForTemplate = this.getValuesForTemplate(checkbox);
      let checkboxOutput = Mustache.render(
        templates[component],
        formForTemplate
      ).trim();
      checkboxOutput = this.addBindSymbolIfNeedIt(checkbox, checkboxOutput);
      checkboxList.push(checkboxOutput.trim());
    });

    const idCheckboxGroup = this.uniqueID();
    let output = Mustache.render(checkboxGroupTemplate, {
      id: idCheckboxGroup,
      checkboxList
    });
    if (form.labelAdded) {
      const label = {
        for: idCheckboxGroup,
        component: output,
        label: form.label
      };
      output = Mustache.render(labelTemplate, label);
    }

    return output;
  },

  getRadioGroupCode ({ radioList, labelAdded, label, pybAnswer, initialValue, name }) {
    const radioHTMLs = radioList.map(radio => {
      const formForTemplate = {
        ...this.getValuesForTemplate(radio),
        pybAnswer,
        name,
        initialValue
      };
      let radioOutput = Mustache.render(
        radioInputTemplate,
        formForTemplate
      ).trim();
      radioOutput = this.addBindSymbolIfNeedIt(radio, radioOutput);
      return radioOutput.trim();
    });

    let output = Mustache.render(radioGroupTemplate, {
      radioHTMLs
    });
    if (labelAdded) {
      const labelArgs = {
        component: output,
        label
      };
      output = Mustache.render(labelTemplate, labelArgs);
    }

    return output;
  },

  getTextTaggingCode (textTagging) {
    const {
      pybAnswer,
      labelAdded,
      label,
      tags,
      text: { snippet, preview },
      readOnly,
      entities,
      confidenceThreshold
    } = textTagging;

    let output = Mustache.render(
      textTaggingTemplate,
      {
        pybAnswer,
        tags: JSON.stringify(tags),
        text: snippet,
        readOnly,
        entities: getEntitiesString(),
        confidenceThreshold,
        // If text snippet and preview are the same then it is static text so no Vue binding.
        // Otherwise it is a variable name so do Vue binding.
        bindText: (snippet === preview) ? '' : ':'
      }
    );

    if (labelAdded) {
      const labelArgs = {
        component: output,
        label
      };
      output = Mustache.render(labelTemplate, labelArgs);
    }
    return output;

    function getEntitiesString () {
      const snippet = entities.snippet;
      // If the snippet is a string then it is a variable name so leave it alone.
      if (typeof snippet === 'string') return snippet;
      // Otherwise it's an array so stringify it.
      else return JSON.stringify(snippet);
    }
  },

  getDropdownCode ({ pybAnswer, choices, labelAdded, label, initialValue }) {
    let output = Mustache.render(
      dropdownTemplate,
      {
        pybAnswer,
        choices: JSON.stringify(choices),
        initialValue
      }
    );

    if (labelAdded) {
      const labelArgs = {
        component: output,
        label
      };
      output = Mustache.render(labelTemplate, labelArgs);
    }
    return output;
  },

  getTextInputCode (form, component) {
    const formForTemplate = this.getValuesForTemplate(form);

    let output = Mustache.render(templates[component], formForTemplate);
    if (form.labelAdded) {
      const label = {
        for: formForTemplate['id'],
        component: output,
        label: formForTemplate['label']
      };
      output = Mustache.render(labelTemplate, label);
    }
    output = this.addBindSymbolIfNeedIt(form, output);

    return output;
  },

  toMultiDict (keyValueIterator) {
    const dict = {};
    for (const [key, value] of keyValueIterator) {
      let values = dict[key];
      if (!values) {
        values = dict[key] = [];
      }
      values.push(value);
    }
    return dict;
  },

  toFormValidation (errorsMultiDict) {
    const messages = flow(Object.values, flatten, uniq)(errorsMultiDict);
    const isValid = !messages.length;
    return { isValid, messages };
  }
};
