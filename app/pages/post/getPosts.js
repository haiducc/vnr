export async function getServerSideProps() {
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let allPosts = await res.json();
  
    return {
      props: { allPosts },
    };
  }

  // useEffect(() => {
  //   setPostsState(allPosts);
  // }, [allPosts]);
  
  // let submitForm = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   let res = await fetch("http://localhost:3000/api/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: title,
  //       content: content,
  //     }),
  //   });
  //   res = await res.json();
  //   setPostsState([...postsState, res]);
  //   setTitle("");
  //   setContent("");
  //   setLoading(false);
  // };