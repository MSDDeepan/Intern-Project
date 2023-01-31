// function messages()
// {
//     return window.localStorage.getItem('messsage')?JSON.parse(localStorage.getItem('messsage')):{}
// }

export default
{
    state:
    {
        message:[]

    },
    mutations:
    {
        setMessage(state,data)
        {
            state.message=data
            // console.log(state.chat)
        }
    },
    actions:
    {
        getMessage:({commit},msg)=>
         {
            // console.log(userdet)
             commit('setMessage',msg) 
            
        }
    },
    getters:
    {
        RetrieveMessage(state)
        {
            return state.message
        }

    },
    namespaced: true
}