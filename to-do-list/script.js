const backlog = document.getElementById('backlog');
const todo = document.getElementById('todo');
const ongoing = document.getElementById('ongoing');
const done = document.getElementById('done');

const todos = {
    backlog: [{ id: "wqe", title: 'Backlog 1' }, { id: "grt", title: 'Backlog 2' }],
    todo: [{ id: "dfe", title: 'Todo 1' }, { id: "nhu", title: 'Todo 2' }],
    ongoing: [{ id: "frg", title: 'Ongoing 1' }, { id: "nuy", title: 'Ongoing 2' }],
    done: [{ id: "frb", title: 'Done 1' }, { id: "bhj", title: 'Done 2' }]
}

const moveItem = (item, from, to) => {
    // console.log(todos[from],todos[to]);
    const itemtoInsert = todos[from][item];
    if(todos[from].length==1){
        todos[from] = []
    }else{
        todos[from] = todos[from].splice(item, 1);
    }

    todos[to].push(itemtoInsert);
}





const renderList = () => {
    let Listitem =(item,disabled,from,right,left,index)=> (`
        <div class="item" id="${item.id}">
            <div class="item-title">${item.title}</div>
                <div class="item-controls">
                    <button class="move-left" ${disabled=='left'?'disabled':''} index="${index}" from="${from}" to="${left}"> <- </button>
                    <button class="move-right" ${disabled=='right'?'disabled':''} index="${index}"  from="${from}" to="${right}"> -> </button>
                </div>
        </div>
    `)
    
    backlogItems = todos.backlog.reduce((acc, item,index) => acc + Listitem(item,'left','backlog','todo','',index), '');
    todoItems = todos.todo.reduce((acc, item,index) => acc + Listitem(item,'','todo','ongoing','backlog',index), '');
    ongoingItems = todos.ongoing.reduce((acc, item,index) => acc + Listitem(item,'','ongoing','done','todo',index), '');
    doneItems = todos.done.reduce((acc, item,index) => acc + Listitem(item,'right','done','','ongoing',index), '');

    
    backlog.innerHTML = backlogItems;
    todo.innerHTML = todoItems;
    ongoing.innerHTML = ongoingItems;
    done.innerHTML = doneItems;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const { from, to, index } = e.target.attributes;
            console.log(from, to,index);
            moveItem(index.value, from.value, to.value);

            renderList();
        })
    })

}

renderList();

