// function checkGroupId(){
//     return localStorage.getItem('ShowGroup')?JSON.parse(localStorage.getItem('ShowGroup')):{}
// }
export default
{
    state:
    {
        group:{}

    },
    mutations:
    {
        setGroup(state,data)
        {
            state.group=data
        }
    },
    actions:
    {
        getGroup:({commit},grp_data)=>
         {
            // console.log(userdet)
             commit('setGroup',grp_data) 
            
        }
    },
    getters:
    {
        RetrieveGroup(state)
        {
            console.log(state.group)
            return state.group

        }

    },
    namespaced: true
}