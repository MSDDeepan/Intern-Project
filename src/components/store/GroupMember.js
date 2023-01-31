export default
{
    state:
    {
        Members:[]

    },
    mutations:
    {
        setMember(state,data)
        {
            state.Members=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        getMember:({commit},members)=>
         {
            // console.log(userdet)
             commit('setMember',members) 
            
        }
    },
    getters:
    {
        RetrieveMember(state)
        {
            return state.Members
        }

    },
    namespaced: true
}