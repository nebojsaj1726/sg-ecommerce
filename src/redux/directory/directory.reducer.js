const INITIAL_STATE = {
    sections: [
        {
            imageUrl: 'https://i.ibb.co/BLXjHp7/ethan-robertson-SYx3-UCHZJlo-unsplash.jpg',
            id: 1
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;