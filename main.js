var app = new Vue(
    {
        el: '#root',
        data: {
            task: [
                {
                    text: 'comprare una giraffa',
                    done: false
                },
                {
                    text: 'capire come cucinare giraffe',
                    done: false
                },
                {
                    text: 'portare fuori spazzatura',
                    done: false
                },
                {
                    text: 'trovare avvocato animalista',
                    done: false
                },
            ],

            completedTask: [

            ],

            newTask: '',
        },

        methods: {

            removeElement(element, index){
                this.task.splice(index, 1);
            },

            completedOrNot(element, index){
                console.log('ciao')
                if (element.done == false){

                    this.completedTask.push(element);
                    this.task.splice(index, 1);
                    element.done = true;

                } else {

                    this.task.push(element);
                    this.completedTask.splice(index, 1);
                    element.done = false;

                }
                
            },

            addNewTask(){
                if(this.newTask != ''){
                    let userTask = {
                        text: this.newTask,
                        done: false
                    };
                    this.task.push(userTask)
                }
            }

        }

    }
)


