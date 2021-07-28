import cl from './Posts.module.css';
import Post from "./Post/Post";
import MyPost from "./MyPost/MyPost";

function Posts(props) {
	let post = props.dataPost.map(p => <Post text={p.post} like={p.like} name={p.name}/>)
	return (
		<div className={cl.section__messages}>
			<MyPost addPost={props.addPost}/>
			{post}
		</div>
	)
}

export default Posts;

