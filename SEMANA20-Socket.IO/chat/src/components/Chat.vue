<template>
    <div class="container">
        <h1>Chat</h1>
        <div class="card">
            <div class="card-body">
                <div v-for="(msg, index) in messages" :key="index">
                        <p><b>{{ msg.user }} : </b> 
                            <span>{{msg.message}}</span></p>
                </div>
            </div>
             <div class="card-footer">
                <form @submit.prevent="sendMessage">
                    User:
                    <input type="text" v-model="user" class="form-control"/>
                    Message:
                    <input type="text" v-model="message" class="form-control"/>
                     <span v-if="typing">{{ typing }} is typing...</span><br/>
                    <button type="submit" class="btn btn-success">Send</button>
                </form>
            </div>
        </div>        
    </div>    
</template>

<script>
import io from 'socket.io-client';
export default{
    data(){
        return{
            typing:false,
            user:'',
            message:'',
            messages: [],
            socket: io('http://localhost:3000')
        }
    },
    methods: {
        sendMessage(e){
            e.preventDefault();

            this.socket.emit('sendMessage',{
                user: this.user,
                message: this.message
            });
            this.message=''
        }
    },
    mounted(){
        this.socket.on('message', (data)=>{
            this.messages.push({
                user: data.user,
                message: data.message
            })
        });

        this.socket.on('typing', (data)=>{
            this.typing=data
        });

        this.socket.on("stopTyping", ()=>{
            this.typing = false
        });
    },
    watch:{
        message: function(){
            this.message
                ? this.socket.emit("typing", this.user)
                : this.socket.emit("stopTyping")
        }
    }
}
</script>