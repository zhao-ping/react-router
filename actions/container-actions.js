/**
 * Created by zp on 16-6-28.
 */

import * as types from '../actions/action-types.js'

export function toPreviewAction() {
  return {type:types.TO_PREVIEW};
}

export function toEditAction() {
  return {type:types.TO_EDIT};
}

export function itemRemoveAction(index,datakey) {
  return {
    type:types.REMOVE_ITEM,
    index,
    datakey
}
}

export function itemAddAction(item) {

  return {
    type:types.ADD_ITEM,
    item
  }
}

export function saveDataAction() {
  return {type:types.SAVE_DATA};
}
