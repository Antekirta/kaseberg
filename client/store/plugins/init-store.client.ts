import { MUTATIONS } from '~/store'
import { localstorageCustom } from '~/modules/Localstorage'
import { IClientLocalstorageKeys } from '~/shared/interfaces/i-client-localstorage'

// @ts-ignore
export default ({ store: { commit } }) => {
  commit(MUTATIONS.M_INIT_BASKET, JSON.parse(localstorageCustom.get(IClientLocalstorageKeys.BASKET)))
}
