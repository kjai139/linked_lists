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
        let newNode = new Node()
        newNode.value = value

        if (this.head != null){
            newNode.next = this.head
            this.head = newNode
        } else {
            this.head = newNode
        }
    }

    size = () => {
        let size
        if (this.head != null){
            let next = this.head
            size = 1
            while (next.next != null){
                size +=1
                next = next.next
                
            }

        } else {
            size = 0
        }
        console.log('size:', size)
        return size
        
    }

    checkHead = () => {
        console.log(this.head)
        return this.head
    }

    checkTail = () => {
        if (this.head != null){
            let next = this.head
            while (next.next != null){
                next = next.next
            }
            console.log(next)
        } else {
            return null
        }
    }
    
    at = (index) => {
        let next = this.head
        for (let i=index; i > 0; i--){
            next = next.next
        }
        // console.log(next)
        return next
        
    }

    pop = () => {
        let index = 0
        if (this.head != null){
            let next = this.head
            while (next.next != null){
                index +=1
                next = next.next
                // console.log(next)
            }
            this.at(index-1).next = null
            console.log(this.at(index-1))
        } else {
            return null
        }
    }

    contains = (value) => {
        if (this.head != null){
            let next = this.head
            while (next.next != null){
                if (next.value == value){
                    return true
                } else {
                    next = next.next
                }
          
            }
            if (next.value == value){
                return true
            } return false
            } else {
                return false
        }
    }

    find = (value) => {
        if (this.head != null){
            let index = 0
            let next = this.head
            while (next.next != null){
                if (next.value == value){
                    // console.log('match')
                    return index
                } else {
                    next = next.next
                    index += 1
                }
            }
            if (next.value == value) {
                console.log('found @ index:', index)
                return index
            } return null
        } return null
        
    }


    toString = () => {
        if (this.head != null){
            let next = this.head
            let str = ''
            while (next.next != null){
                str += `(${next.value}) -> `
                next = next.next
            }
            str += `(${next.value}) -> null`
            console.log(str)
            return str

        } else {
            return null
        }
        
    }


    insertAt = (value, index) => {
        let linkIndex = 0
        let newNode = new Node()
        newNode.value = value
        if (this.head != null){
            let next = this.head
            while (next.next != null){
                if (index == linkIndex && index == 0){
                    newNode.next = this.head
                    this.head.value = newNode
                    
                } else if (index == linkIndex){

                    // console.log(this.at(index), 'index')
                    newNode.next = this.at(index)
                    this.at(index-1).next = newNode
                    
                }
                linkIndex +=1
                next = next.next
            }
        } else {
            this.head = newNode
        }
        

       
    }

    removeAt = (index) => {
        let linkIndex = 0
        
        if (this.head != null){
            let next = this.head
            while (next.next != null){
                if (index == linkIndex && index == 0){
                    this.head = this.head.next
                    
                } else if (index == linkIndex){

                    // console.log(this.at(index), 'index')
                    this.at(index-1).next = this.at(index+1)
                    
                    
                }
                linkIndex +=1
                next = next.next
            }
        } else {
            return
        }
        
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



newList.append('test1')

newList.append('the end')
newList.prepend('new head')
newList.prepend('new beginning')

newList.checkHead()
newList.checkTail()

newList.at(0)

newList.find('the end')
newList.size()


newList.toString()

newList.insertAt('insert at 1', 1)
newList.toString()
newList.removeAt(2)
newList.pop()

newList.toString()
// console.log(newList.head)