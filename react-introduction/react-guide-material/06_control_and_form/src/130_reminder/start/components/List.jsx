const List = ({todo}) => {
    return (
        <div key={todo.id}>
            <button>完了</button>
            {todo.content}
        </div>
    );
}

export default List;