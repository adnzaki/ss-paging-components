import { usePaging, usePagingStore } from "ss-paging-vue";

const getPaging = useStore => {
  return useStore ? usePagingStore() : usePaging()
}

const setPagingState = (useStore, { paging, property, value }) => {
  useStore ? paging[property] = value : paging.state[property] = value
}

export { getPaging, setPagingState }

