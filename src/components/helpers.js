const setPagingState = (useStore, { paging, property, value }) => {
  useStore ? paging[property] = value : paging.state[property] = value
}

const densePadding = { padding: '6px 12px' }

export { setPagingState, densePadding }

