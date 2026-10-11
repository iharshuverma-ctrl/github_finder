
async function findGitHubUser(username) {
    try {
        const url = `https://api.github.com/users/${username}`;

        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                console.log("User not found!");
                return;
            }

            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();

        console.log("\n===== GitHub User Profile =====");
        console.log("Username:", user.login);
        console.log("Name:", user.name || "Not available");
        console.log("Bio:", user.bio || "Not available");
        console.log("Public Repositories:", user.public_repos);
        console.log("Followers:", user.followers);
        console.log("Following:", user.following);
        console.log("Location:", user.location || "Not available");
        console.log("Profile:", user.html_url);
        console.log("================================");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

const username = process.argv[2];

if (!username) {
    console.log("Usage: node day21_github_finder.js <username>");
} else {
    findGitHubUser(username);
}
