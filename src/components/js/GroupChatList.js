import HeaderComponent from '../../components/HeaderComponent.vue'
import GroupList from '../../components/GroupList.vue'
import ChatHeader from '../../components/ChatHeader.vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default
    {
        name: "GroupChatList",
        components:
        {
            HeaderComponent,
            GroupList,
            ChatHeader,
            bottom: false,
        },
        // el: '#SubSec',
        data() {
            return {
                user: this.$route.query.user_name,
                message: "",
                Group: {},
                files: [],
                lazy:[]
            }

        },
        mounted() {
            console.log(this.RetrieveGroup);
            this.Group = this.RetrieveGroup;
            



        },
        computed:
        {
            data_value() {
                console.log(this.$route.query.dat)
                return this.$route.query.dat;

            },
            ...mapGetters('User_Store', ['RetrieveUserDetails']),
            ...mapGetters('Chat_List', ['RetrieveChatList']),
            ...mapGetters('ChatStore', ['RetrieveChat']),
            ...mapGetters('Message', ['RetrieveMessage']),
            ...mapGetters('GroupStore', ['RetrieveGroup']),



        },
        created() {

            
        },
        methods:
        {
            ...mapActions('Chat_List', ['getChatList']),
            ...mapActions('Message', ['getMessage']),
            ...mapActions('GroupStore', ['getGroup']),
            getfiltername(value)
            {
                this.Group=value;
            },
            getDetails(data) {
                console.log(data)
                this.User_Details.add(data)
                console.log(this.User_Details)

            },
           

            getSearch(data) {
                this.User_Details = data;
            },
            async sendMessage() {
                // console.log(this.RetrieveUserDetails)
                document.getElementById('msg').value = '';
                console.log(this.RetrieveChat)
                console.log(this.RetrieveUserDetails)
                var object = { senderid: this.RetrieveUserDetails.mobilenum, groupid: this.RetrieveChat.groupid, messagetext: this.message }
                console.log(object)
                await axios.post(`two/sendMessage`, object).then((response) => {
                    document.getElementById('msg').value = '';
                    console.log(response);
                    
                        console.log(this.RetrieveChat.groupid)
                        axios.get(`two/displaySpecific?groupid=${this.RetrieveChat.groupid}`).then((response) => {
                            document.getElementById('msg').value = '';
                            console.log(response)
                            this.getMessage(response)
                        })
                   
                    

                })
            },

            handleFilesUpload() {
                let uploadedFiles = this.$refs.files.files;
                // for( var i = 0; i < uploadedFiles.length; i++ ){
                // console.log(uploadedFiles)
                this.files.push(uploadedFiles);
                // }
            },
            // addFiles() {
            //     this.$refs.files.click();
            // },

            submitFiles() {

                let formData = new FormData();
                // for( var i = 0; i < this.files.length; i++ ){
                let file = this.files[0];
                console.log(file.item(0))
                var x=file.item(0)
                formData.append('file',x,x.name);
                console.log(formData)

                 axios.post( `/two/upload`,
                      formData,
                      {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                      }
                      )
                  },

            },
            watch:
            {
                RetrieveChatList(newValue) {
                    console.log(newValue)
                    // console.log(this.User_Details.groupid)
                    // this.fil_detail= newValue;
                },
                
            }

        }
