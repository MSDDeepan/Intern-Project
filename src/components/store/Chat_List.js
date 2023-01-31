export default
{
    state:
    {
        chat_list:[]

    },
    mutations:
    {
        setChatList(state,data)
        {
            state.chat_list.push(data)
        }
    },
    actions:
    {
        getChatList:({commit},userdet)=>
         {
            // console.log(userdet)
             commit('setChatList',userdet) 
            
        }
    },
    getters:
    {
        RetrieveChatList(state)
        {
            return state.chat_list
        }

    },
    namespaced: true
}