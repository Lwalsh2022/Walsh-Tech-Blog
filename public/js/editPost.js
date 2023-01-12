
const updateBlogPost = async (event) => {
    /** 
     * Handles updating blog post
     */
    
    event.preventDefault();

    //collects needed information from front end
    const id = document.querySelector('#disabled-text').value.trim();
    const title = document.querySelector('#title-entry').value.trim();
    const content = document.querySelector('#content-entry').value.trim();
    const username = document.querySelector('#username-entry').value.trim();

    // use username to get user_id from database
    if (id && title && content && username) {
        // send GET request for data about username
        const response = await fetch(`/api/user/${username}`)

        if (response.ok) {
            const userData = await response.json();
            // What we really need is the userData.id to later use in PUT request
            const user_id = userData.id;
