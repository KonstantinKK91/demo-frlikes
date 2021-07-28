import reducerProfile, {addPostAC} from "./reducerProfile";

test('add post',()=>{
	let action = addPostAC('test');
	let state = {
		dataPost:[
			{id: 1, post: 'w', name: "Konstantin",},
			{id: 2, post: 'w', name: "Konstantin",},
			{id: 3, post: 'w', name: "Konstantin",},
		]
	}
	let newPost = reducerProfile(state,action);
	expect(state.dataPost.length).toBe(3)
})



