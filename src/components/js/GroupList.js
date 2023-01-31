// import { faWindows } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";






export default
    {
        name: "GroupList",
        data() {
            return {
                flag: true,

            }
        },
        props:
        {
            data:
            {
                type: Object,
                default: {}
            }

        },
        // created() {
        //     setInterval(() => {
        //         axios.get(`two/displaySpecific?groupid=${this.RetrieveChat.groupid}`).then((response1) => {
        //             console.log(response1)
        //             this.getGroup(response1)
        //         })

        //     }, 20000)


        // },
        computed:
        {
            ...mapGetters('ChatStore', ['RetrieveChat']),
            ...mapGetters('Message', ['RetrieveMessage']),
            ...mapGetters('GroupMember', ['RetrieveMember'])


        },
        mounted() {



        },
        methods:
        {
            ...mapActions('ChatStore', ['getChat']),
            ...mapActions('Message', ['getMessage']),
            ...mapActions('GroupMember', ['getMember']),


            async display() {
                // console.log(this.data); 
                // console.log(this.data.groupid)
                window.localStorage.setItem('Chat', JSON.stringify(this.data))
                this.getChat(this.data);

                axios.get(`two/displaySpecific?groupid=${this.RetrieveChat.groupid}`).then((response) => {
                    // console.log(response.data);
                    this.getMessage(response.data);
                    window.localStorage.setItem('messsage', JSON.stringify(response.data))

                    // console.log(this.RetrieveMessage)    
                });
                // console.log(this.RetrieveChat);

                // let groupid=this.RetrieveChat.groupid

                // console.log(list_of_messages)

                // console.log(response.data)
                let groupmember = await axios.get(`/two/displayAgroupMembers?groupid=${this.RetrieveChat.groupid}`)
                // console.log()
                this.getMember(groupmember.data)
                console.log(this.RetrieveMember, "jkbhj");
                this.$router.push({ name: "GroupChatList", query: { dat: this.data.groupid } })


            }

        }
    }