export default
{
    state:
    {
        contacts:[]

    },
    mutations:
    {
        setContact(state,data)
        {
            state.contacts=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        getContact:({commit},contact)=>
         {
            // console.log(userdet)
             commit('setContact',contact) 
            
        }
    },
    getters:
    {
        RetrieveContact(state)
        {
            return state.contacts
        }

    },
    namespaced: true
}