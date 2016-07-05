/**
 * Created by zp on 16-6-28.
 */
import store from '../store.js'
import { toPreviewAction,toEditAction,itemRemoveAction,itemAddAction,saveDataAction} from '../actions/container-actions.js'
export function showPreview(){
  store.dispatch(toPreviewAction())
}

export function showEdit() {
  store.dispatch(toEditAction())
}


export function itemRemove(index,datakey) {
  store.dispatch(itemRemoveAction(index,datakey))
}

export function itemAdd(item) {
 
  store.dispatch(itemAddAction(item))
}

export function saveData() {
  store.dispatch(saveDataAction())
}