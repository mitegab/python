import requests
import json

# GitHub repository details
repository_owner = 'Byronseilous'
repository_name = 'python'
base_branch = 'feature-branch-3'  # The target branch where the pull requests will be merged

# GitHub Personal Access Token (replace with your token)
access_token = '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'

# Number of pull requests to create
num_pull_requests = 3

# Create pull requests
for i in range(1, num_pull_requests + 1):
    pr_title = f'Feature #{i}'
    pr_body = f'This is pull request #{i}.'
    pr_head = f'feature-branch-{i}'  # Adjust the branch name as needed

    data = {
        'title': pr_title,
        'body': pr_body,
        'head': pr_head,
        'base': base_branch
    }

    headers = {
        'Authorization': f'token {access_token}',
        'Accept': 'application/vnd.github.v3+json'
    }

    response = requests.post(
        f'https://api.github.com/repos/{repository_owner}/{repository_name}/pulls',
        data=json.dumps(data),
        headers=headers
    )

    if response.status_code == 201:
        print(f'Pull request {i} created successfully.')
    else:
        print(f'Failed to create pull request {i}. Status code: {response.status_code}')
        print(response.text)

