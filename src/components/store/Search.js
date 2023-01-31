export default
{
    state:
    {
        search_group:[]

    },
    mutations:
    {
        setSearch(state,data)
        {
            state.search_group=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        getSearch:({commit},grp_data)=>
         {
            // console.log(userdet)
             commit('setSearch',grp_data) 
            
        }
    },
    getters:
    {
        RetrieveSearch(state)
        {
            return state.search_group
        }

    },
    namespaced: true
}