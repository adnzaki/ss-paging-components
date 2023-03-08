const setPagingState = (useStore, { paging, property, value }) => {
  useStore ? paging[property] = value : paging.state[property] = value
}

export { setPagingState }

