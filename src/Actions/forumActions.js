export const addThread = (thread) => {
  console.log("thread", thread)
    return {
      type: 'ADD_THREAD',
      payload: thread,
    };
  };
  