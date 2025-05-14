const app = Vue.createApp({
    data(){
        return{
            friends: [
                { id: 'manuel', name: 'Manuel', phone: '123-456-7890', email: 'manuel@localhost.coim' },
                { id: 'julie', name: 'Julie', phone: '123-456-7890', email: 'julie@localhost.com' }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    props: ['friend'],
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');