document.addEventListener('DOMContentLoaded', () => {
    const checkOutButtons = document.querySelectorAll('.check-out-button');

    checkOutButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Redirect to post_detail.html
            window.location.href = 'post_detail.html'; 
        });
    });

    function openPostDetails(postId) {
        // Store post data (replace with your actual data)
        const posts = {
            1: {
                authorName: "Jane Doe",
                authorUsername: "@janedoe",
                authorPicture: "images/bw.jpeg",
                title: "The Power of Storytelling",
                content: generateLoremIpsum(5) // Generate random text
            },
            2: {
                authorName: "John Smith",
                authorUsername: "@johnsmith",
                authorPicture: "images/writer2.jpeg",
                title: "Finding Your Voice",
                content: generateLoremIpsum(3) // Generate random text
            },
            // ... more posts
        };

        const post = posts[postId];

        if (post) {
            // Open the post details page in a new window or tab
            const postDetailPage = window.open('post_detail.html', '_blank');

            postDetailPage.addEventListener('DOMContentLoaded', () => {
                postDetailPage.document.getElementById('author-name').textContent = post.authorName;
                postDetailPage.document.getElementById('author-username').textContent = post.authorUsername;
                postDetailPage.document.getElementById('author-picture').src = post.authorPicture;
                postDetailPage.document.getElementById('post-title').textContent = post.title;
                postDetailPage.document.getElementById('post-content').textContent = post.content;
            });
        } else {
            alert("Post not found!");
        }
    }

    // Helper function to generate lorem ipsum text (for demonstration)
    function generateLoremIpsum(paragraphs) {
        const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... "; // Your lorem ipsum text
        let text = "";
        for (let i = 0; i < paragraphs; i++) {
            text += loremIpsum + "\n\n";
        }
        return text;
    }
});

const goHomeButton = document.getElementById('goHomeButton');

goHomeButton.addEventListener('click', () => {
    window.location.href = 'home.html'; // Redirect to home.html
});
