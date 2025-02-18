// Getters
export const GET_TEXT_INPUT_PROPS = 'textinput/PROPS';
export const GET_TEXT_INPUT_FORM_VALID = 'textinput/PROPS_VALID';

export const GET_CHECKBOX_INPUT_PROPS = 'checkboxinput/PROPS';
export const GET_CHECKBOX_INPUT_FORM_VALID = 'checkboxinput/FORM_VALID';
export const GET_CHECKBOXLIST = 'checkboxinput/CHECKBOXLIST';

export const GET_TABLE_PROPS = 'table/PROPS';
export const GET_TABLE_DATA_LIST = 'table/GET_TABLE_DATA_LIST';
export const GET_TABLE_FORM_VALID = 'table/FORM_VALID';
export const GET_TABLE_COLUMNS_LIST = 'table/COLUMN_LIST';
export const GET_TABLE_ERRORS = 'table/GET_TABLE_ERRORS';
export const GET_TABLE_NAME = 'table/NAME';
export const GET_TABLE_LABEL = 'table/LABEL';

export const GET_RADIO_INPUT_PROPS = 'radioInput/PROPS';
export const GET_RADIO_INPUT_FORM_VALID = 'radioInput/FORM_VALID';
export const GET_RADIO_INPUT_ERRORS = 'radioInput/GET_RADIO_INPUT_ERRORS';

export const GET_TEXT_TAGGING_PROPS = 'textTagging/PROPS';
export const GET_TEXT_TAGGING_FORM_VALID = 'textTagging/FORM_VALID';
export const GET_TEXT_TAGGING_ERRORS = 'textTagging/GET_TEXT_TAGGING_ERRORS';

export const GET_DROPDOWN_INPUT_PROPS = 'dropdownInput/PROPS';
export const GET_DROPDOWN_INPUT_FORM_VALID = 'dropdownInput/FORM_VALID';
export const GET_DROPDOWN_INPUT_ERRORS = 'dropdownInput/GET_DROPDOWN_INPUT_ERRORS';

// Mutations
export const MUTATE_CLEAR_CHECKBOX_INPUT_FORM = 'checkboxInput/MUTATE_CLEAR_CHECKBOX_FORM';
export const MUTATE_CHECKBOX_LABEL = 'checkboxInput/MUTATE_CHECKBOX_LABEL';
export const MUTATE_CHECKBOX_LABEL_ADDED = 'checkboxInput/MUTATE_CHECKBOX_LABEL_ADDED';
export const MUTATE_CHECKBOX_LIST_ITEM = 'checkboxInput/MUTATE_CHECKBOX_LIST_ITEM';
export const MUTATE_CHECKBOX_ADD_LIST_ITEM = 'checkboxInput/MUTATE_CHECKBOX_ADD_LIST_ITEM';
export const MUTATE_CHECKBOX_DELETE_LIST_ITEM = 'checkboxInput/MUTATE_CHECKBOX_DELETE_LIST_ITEM';
export const MUTATE_CHECKBOX_UPDATE_LIST_ITEM = 'checkboxInput/MUTATE_CHECKBOX_UPDATE_LIST_ITEM';

export const MUTATE_TEXT_INPUT_LABEL = 'textinput/MUTATE_TEXT_INPUT_LABEL';
export const MUTATE_TEXT_INPUT_LABEL_ADDED = 'textinput/MUTATE_TEXT_INPUT_LABEL_ADDED';
export const MUTATE_TEXT_INPUT_PYB_ANSWER = 'textinput/MUTATE_TEXT_INPUT_PYB_ANSWER';
export const MUTATE_CLEAR_TEXT_INPUT_FORM = 'textinput/MUTATE_TEXT_INPUT_FORM';

export const MUTATE_TABLE_ITEM = 'table/MUTATE_CHECKBOX_LIST_ITEM';
export const MUTATE_TABLE_ADD_COLUMN = 'table/MUTATE_TABLE_ADD_COLUMN';
export const MUTATE_TABLE_DELETE_COLUMN = 'table/MUTATE_TABLE_DELETE_COLUMN';
export const MUTATE_TABLE_UPDATE_COLUMN = 'table/MUTATE_TABLE_UPDATE_COLUMN';

export const MUTATE_TABLE_ADD_DATA_ROW = 'table/MUTATE_TABLE_ADD_DATA_ROW';
export const MUTATE_TABLE_DELETE_DATA_ROW = 'table/MUTATE_TABLE_DELETE_DATA_ROW';
export const MUTATE_TABLE_UPDATE_DATA_ROW = 'table/MUTATE_TABLE_UPDATE_DATA_ROW';

export const MUTATE_CLEAR_TABLE_FORM = 'table/MUTATE_CLEAR_TABLE_FORM';
export const MUTATE_TABLE_LABEL = 'table/MUTATE_TABLE_LABEL';
export const MUTATE_TABLE_NAME = 'table/MUTATE_TABLE_NAME';
export const MUTATE_TABLE_DATA = 'table/MUTATE_TABLE_DATA';

export const MUTATE_CLEAR_RADIO_INPUT_FORM = 'radioInput/MUTATE_CLEAR_RADIO_INPUT_FORM';
export const MUTATE_RADIO_GROUP_ANSWER_FIELD = 'radioInput/MUTATE_RADIO_GROUP_ANSWER_FIELD';
export const MUTATE_RADIO_GROUP_LABEL_ADDED = 'radioInput/MUTATE_RADIO_GROUP_LABEL_ADDED';
export const MUTATE_RADIO_GROUP_LABEL = 'radioInput/MUTATE_RADIO_GROUP_LABEL';
export const MUTATE_RADIO_GROUP_INITIAL_VALUE = 'radioInput/MUTATE_RADIO_GROUP_INITIAL_VALUE';
export const MUTATE_RADIO_GROUP_NAME = 'radioInput/MUTATE_RADIO_GROUP_NAME';
export const MUTATE_RADIO_GROUP_DELETE_LIST_ITEM = 'radioInput/MUTATE_RADIO_GROUP_DELETE_LIST_ITEM';
export const MUTATE_RADIO_GROUP_ADD_LIST_ITEM = 'radioInput/MUTATE_RADIO_GROUP_ADD_LIST_ITEM';
export const MUTATE_RADIO_GROUP_UPDATE_LIST_ITEM = 'radioInput/MUTATE_RADIO_GROUP_UPDATE_LIST_ITEM';

export const MUTATE_CLEAR_TEXT_TAGGING_FORM = 'textTagging/MUTATE_CLEAR_TEXT_TAGGING_FORM';
export const MUTATE_TEXT_TAGGING_ANSWER_FIELD = 'textTagging/MUTATE_TEXT_TAGGING_ANSWER_FIELD';
export const MUTATE_TEXT_TAGGING_LABEL_ADDED = 'textTagging/MUTATE_TEXT_TAGGING_LABEL_ADDED';
export const MUTATE_TEXT_TAGGING_LABEL = 'textTagging/MUTATE_TEXT_TAGGING_LABEL';
export const MUTATE_TEXT_TAGGING_READONLY = 'textTagging/MUTATE_TEXT_TAGGING_READONLY';
export const MUTATE_TEXT_TAGGING_DELETE_TAG = 'textTagging/MUTATE_TEXT_TAGGING_DELETE_TAG';
export const MUTATE_TEXT_TAGGING_ADD_TAG = 'textTagging/MUTATE_TEXT_TAGGING_ADD_TAG';
export const MUTATE_TEXT_TAGGING_TEXT = 'textTagging/MUTATE_TEXT_TAGGING_TEXT';
export const MUTATE_TEXT_TAGGING_DELETE_ENTITY = 'textTagging/MUTATE_TEXT_TAGGING_DELETE_ENTITY';
export const MUTATE_TEXT_TAGGING_ADD_ENTITY = 'textTagging/MUTATE_TEXT_TAGGING_ADD_ENTITY';
export const MUTATE_TEXT_TAGGING_SOURCE_TYPE = 'textTagging/MUTATE_TEXT_TAGGING_SOURCE_TYPE';
export const MUTATE_TEXT_TAGGING_ENTITY_SOURCE = 'textTagging/MUTATE_TEXT_TAGGING_ENTITY_SOURCE';
export const MUTATE_TEXT_TAGGING_USE_STATIC_IN_PREVIEW = 'textTagging/MUTATE_TEXT_TAGGING_USE_STATIC_IN_PREVIEW';
export const MUTATE_TEXT_TAGGING_CONFIDENCE_THRESHOLD = 'textTagging/MUTATE_TEXT_TAGGING_CONFIDENCE_THRESHOLD';

export const MUTATE_CLEAR_DROPDOWN_INPUT_FORM = 'dropdownInput/MUTATE_CLEAR_DROPDOWN_INPUT_FORM';
export const MUTATE_DROPDOWN_ANSWER_FIELD = 'dropdownInput/MUTATE_DROPDOWN_ANSWER_FIELD';
export const MUTATE_DROPDOWN_LABEL_ADDED = 'dropdownInput/MUTATE_DROPDOWN_LABEL_ADDED';
export const MUTATE_DROPDOWN_LABEL = 'dropdownInput/MUTATE_DROPDOWN_LABEL';
export const MUTATE_DROPDOWN_INITIAL_VALUE = 'dropdownInput/MUTATE_DROPDOWN_INITIAL_VALUE';
export const MUTATE_DROPDOWN_DELETE_CHOICE = 'dropdownInput/MUTATE_DROPDOWN_DELETE_CHOICE';
export const MUTATE_DROPDOWN_ADD_CHOICE = 'dropdownInput/MUTATE_DROPDOWN_ADD_CHOICE';
export const MUTATE_DROPDOWN_UPDATE_CHOICE = 'dropdownInput/MUTATE_DROPDOWN_UPDATE_CHOICE';
