class LinkedList {
    constructor(){
        this.head = null

    }

    append = (value) => {
        let newNode = new Node()
        newNode.value = value
        
        
        
        
        if (this.head == null){
            this.head = newNode
        } else {
            
            let next = this.head
            while (next.next != null){
                next = next.next
            }
            
            next.next = newNode

            // console.log(next)

           
        }
    }

    prepend = (value) => {
        
    }

    size = () => {
        
    }

    head = () => {
        
    }

    tail = () => {
        
    }
    
    at = (index) => {
        
    }

    pop = () => {
       
    }

    contains = (value) => {
       
    }

    find = (value) => {
        
        
    }


    toString = () => {
      
    }


    insertAt = (value, index) => {
       
    }

    removeAt = (index) => {
        
    }
}


class Node {
    constructor(
        value = null,
        next = null
    ){
        this.value = value
        this.next = next
    }

    
}


let newList = new LinkedList


let headNode = new Node('joe')
newList.head = headNode
newList.append('test1')

newList.append('the end')


console.log(newList.head)