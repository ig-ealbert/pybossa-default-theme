import utils from '../components/builder/utils';
import { state as textInput } from '../components/builder/store/modules/textInput';
import { state as checkboxInput } from '../components/builder/store/modules/checkboxInput';
import { state as radioInput } from '../components/builder/store/modules/radioInput';

test('getTextInputCode for TEXT_INPUT', () => {
  textInput['pyb-answer'] = 'answername';
  textInput.label = 'Test label';
  textInput.labelAdded = true;

  const componentCode = utils.getSnippet('TEXT_INPUT', textInput);
  expect(componentCode.includes('Test label')).toBeTruthy();

  expect(componentCode.includes('<text-input')).toBeTruthy();
  expect(componentCode.includes('</text-input>')).toBeTruthy();
  expect(
    componentCode.includes(`pyb-answer="${textInput['pyb-answer']}"`)
  ).toBeTruthy();
  expect(componentCode.includes(`id="${textInput.id}"`)).toBeTruthy();
});

it('getCheckboxInputCode for CHECKBOX_INPUT', () => {
  checkboxInput.labelAdded = true;
  checkboxInput.label = 'Test label';
  checkboxInput.checkboxList = [];
  checkboxInput.checkboxList[0] = {
    id: 'id0',
    'pyb-answer': 'checkboxanswer0',
    label: 'test checkbox0 label',
    labelAdded: false,
    'initial-value': { value: true, isVariable: true },
    isVariable: true,
    isValidForm: true
  };
  checkboxInput.checkboxList[1] = {
    id: 'id1',
    'pyb-answer': 'checkboxanswer',
    label: 'test checkbox1 label',
    labelAdded: false,
    'initial-value': { value: false, isVariable: true },
    isVariable: true,
    isValidForm: true
  };
  const componentCode = utils.getSnippet('CHECKBOX_INPUT', checkboxInput);
  expect(componentCode.includes('<checkbox-input')).toBeTruthy();
  expect(componentCode.includes('</checkbox-input>')).toBeTruthy();
  expect(componentCode.includes('Test label')).toBeTruthy();
  expect(componentCode.includes(checkboxInput.checkboxList[0].label)).toBeTruthy();
  expect(componentCode.includes(
    `pyb-answer="${checkboxInput.checkboxList[0]['pyb-answer']}"`)).toBeTruthy();
  expect(componentCode.includes(
    `:initial-value="${checkboxInput.checkboxList[0]['initial-value'].value}"`
  )).toBeTruthy();
  expect(componentCode.includes(`id="${checkboxInput.checkboxList[0].id}"`)
  ).toBeTruthy();
  expect(componentCode.includes(checkboxInput.checkboxList[1].label)).toBeTruthy();
  expect(componentCode.includes(
    `pyb-answer="${checkboxInput.checkboxList[1]['pyb-answer']}"`)).toBeTruthy();
  expect(componentCode.includes(
    `:initial-value="${checkboxInput.checkboxList[1]['initial-value'].value}"`
  )).toBeTruthy();
  expect(componentCode.includes(`id="${checkboxInput.checkboxList[1].id}"`)
  ).toBeTruthy();
});

it('getRadioGroupCode for RADIO_INPUT', () => {
  radioInput.labelAdded = true;
  radioInput.label = 'Test label';
  radioInput.pybAnswer = 'radioanswer';
  radioInput.initialValue = 'A';
  radioInput.name = 'radio group';
  radioInput.radioList = [
    {
      label: 'test radio0 label',
      value: 'A'
    },
    {
      label: 'test radio1 label',
      value: 'B'
    }
  ];
  const componentCode = utils.getSnippet('RADIO_INPUT', radioInput);
  expect(componentCode.includes('<radio-input')).toBeTruthy();
  expect(componentCode.includes('</radio-input>')).toBeTruthy();
  expect(componentCode.includes(radioInput.label)).toBeTruthy();
  expect(componentCode.includes(radioInput.radioList[0].label)).toBeTruthy();
  expect(componentCode.includes(
    `pyb-answer="${radioInput.pybAnswer}"`)).toBeTruthy();
  expect(componentCode.includes(radioInput.radioList[1].label)).toBeTruthy();
  expect(componentCode.includes(`initial-value="A"`)).toBeTruthy();
  expect(componentCode.includes(`value="${radioInput.radioList[0].value}"`)).toBeTruthy();
  expect(componentCode.includes(`value="${radioInput.radioList[1].value}"`)).toBeTruthy();
  expect(componentCode.includes(`name="${radioInput.name}"`)).toBeTruthy();
});

it('getTableInputCode for TABLE', () => {
  const form = { name: 'answerName',
    data: { value: 'sourceNameData', isVariable: true, isDirty: true, list: [] },
    options: { headings: { 'testColName': 'Col Name', 'testColComponentTextInput': 'Text Input Header Column', 'testColComponentCheckboxInput': 'Checkbox Input Header Column' } },
    columns: [{ 'name': 'testColName', 'header': 'Col Name', 'component': 'plain-text', 'id': 'Column 1', 'isDirty': true },
      { 'name': 'testColComponentTextInput', 'header': 'Text Input Header Column', 'component': 'text-input', 'id': 'Column 2', 'isDirty': true },
      { 'name': 'testColComponentCheckboxInput', 'header': 'Checkbox Input Header Column', 'component': 'checkbox-input', 'id': 'Column 3', 'isDirty': true }],
    'isValidForm': true };

  const componentCode = utils.getSnippet('TABLE', form);
  expect(componentCode.includes('<table-element')).toBeTruthy();
  expect(componentCode.includes('</table-element>')).toBeTruthy();
  expect(componentCode.includes("name='answerName'")).toBeTruthy();
  expect(componentCode.includes(`:data='${form.data.value}'`)).toBeTruthy();
  expect(componentCode.includes(`:options='{`)).toBeTruthy();
  expect(componentCode.includes(`"headings": {`)).toBeTruthy();
  expect(componentCode.includes(`:columns='["testColName","testColComponentTextInput","testColComponentCheckboxInput"]'`)).toBeTruthy();

  expect(componentCode.includes('"testColName": "Col Name"')).toBeTruthy();
  expect(componentCode.includes('"testColComponentTextInput": "Text Input Header Column"')).toBeTruthy();
  expect(componentCode.includes('"testColComponentCheckboxInput": "Checkbox Input Header Column"')).toBeTruthy();

  expect(componentCode.includes(`<div slot="testColComponentTextInput" slot-scope="props">`)).toBeTruthy();
  expect(componentCode.includes(`<text-input :row="props.row" pyb-table-answer="testColComponentTextInput"></text-input>`)).toBeTruthy();
  expect(componentCode.includes(`<div slot="testColComponentCheckboxInput" slot-scope="props">`)).toBeTruthy();
  expect(componentCode.includes(`<checkbox-input :row="props.row" pyb-table-answer="testColComponentCheckboxInput"></checkbox-input>`)).toBeTruthy();
});

it('getTableInputCode for TABLE with static data', () => {
  const form = { name: 'answerName',
    data: { value: '', isVariable: false, isDirty: true, list: [{ 'test': 'Test Row' }] },
    options: { headings: { 'test': 'Test' } },
    columns: [{ 'name': 'test', 'header': 'Test', 'component': 'plain-text', 'id': 'Column 1', 'isDirty': true }]
  };

  const componentCode = utils.getSnippet('TABLE', form);
  expect(componentCode.includes('<table-element')).toBeTruthy();
  expect(componentCode.includes('</table-element>')).toBeTruthy();
  expect(componentCode.includes(`:data='[{"test":"Test Row"}]'`)).toBeTruthy();
  expect(componentCode.includes(`:columns='["test"]'`)).toBeTruthy();

  expect(componentCode.includes(`:options='{`)).toBeTruthy();
  expect(componentCode.includes(`"headings": {`)).toBeTruthy();

  expect(componentCode.includes(`"test": "Test"`)).toBeTruthy();
});

it('Helper components', () => {
  let componentCode = utils.getSnippet('TIMER', {});
  expect(componentCode.trim()).toEqual('<task-timer></task-timer>');

  componentCode = utils.getSnippet('TASK_PRESENTER', {});
  expect(componentCode.trim()).toEqual('<task-presenter></task-presenter>');

  componentCode = utils.getSnippet('CANCEL_BUTTON', {});
  expect(componentCode.trim()).toEqual('<cancel-button></cancel-button>');

  componentCode = utils.getSnippet('BUTTON_ROW', {});
  expect(componentCode.trim()).toEqual('<button-row></button-row>');

  componentCode = utils.getSnippet('SUBMIT_BUTTON', {});
  expect(componentCode.trim()).toEqual('<submit-button></submit-button>');

  componentCode = utils.getSnippet('SUBMIT_LAST_BUTTON', {});
  expect(componentCode.trim()).toEqual('<submit-last-button></submit-last-button>');
});
