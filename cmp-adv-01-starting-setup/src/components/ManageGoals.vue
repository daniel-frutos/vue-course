<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="addGoal">Add Goal</button>
    <error-alert v-if="inputIsInvalid">
        <h2>Input should not be empty</h2>
        <button @click="confirmError">Okay</button>
    </error-alert>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal">{{ goal }}</slot>
        </li>
    </ul>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
    cmponents: {
        ErrorAlert
    },
    data() {
        return {
            goals: [],
            inputIsInvalid: false
        };
    },
    methods: {
        addGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }
            this.inputIsInvalid = false;
            this.goals.push(enteredValue);
            this.$refs.goal.value = '';
        },
        confirmError() {
            this.inputIsInvalid = false;
        },
    },
};
</script>