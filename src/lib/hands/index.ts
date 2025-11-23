import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function createOrUpdateFile(
  owner: string,
  repo: string,
  path: string,
  content: string,
  message: string
) {
  try {
    let sha;
    try {
      const { data } = await octokit.rest.repos.getContent({
        owner,
        repo,
        path,
      });
      if (Array.isArray(data)) {
        throw new Error("Path is a directory, not a file");
      }
      sha = data.sha;
    } catch (e) {
      // File doesn't exist, so we'll create it.
    }

    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message,
      content: Buffer.from(content).toString("base64"),
      sha,
    });
    return true;
  } catch (error) {
    console.error("Hands Error:", error);
    throw error;
  }
}
