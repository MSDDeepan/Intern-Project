export default
{
    state:
    {
        chat:{}

    },
    mutations:
    {
        setChat(state,data)
        {
            state.chat=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        getChat:({commit},userdet)=>
         {
            // console.log(userdet)
             commit('setChat',userdet) 
            
        }
    },
    getters:
    {
        RetrieveChat(state)
        {
            return state.chat
        }

    },
    namespaced: true
}