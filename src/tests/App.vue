<script setup>
import { usePaging } from 'ss-paging-vue';
import { onMounted } from 'vue';

const paging = usePaging()
onMounted(() => {
  const limit = 25
  paging.state.rows = limit

  paging.getData({
    lang: 'english',
    limit,
    offset: 0,
    orderBy: 'institution_name',
    searchBy: 'institution_name',
    sort: 'ASC',
    search: '',
    url: `https://yesstudyabroad.actudent.com/admin/institute/get-data/all/all/none/none/null/`,
    autoReset: {
      active: true,
      timeout: 500
    },
    linkNum: 3,
    activeClass: 'active',
    useAuth: false,
    // beforeRequest: () => {
    //   showTable.value = false
    // },
    // afterRequest: () => {
    //   setTimeout(() => {
    //     showTable.value = true
    //  }, 1000);
    // }
  })
})

</script>

<template>
  <sp-select :selected="50" dense :paging="paging">
  </sp-select>
</template>