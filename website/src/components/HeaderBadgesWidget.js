import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const HeaderBadgesWidget = ({ authors }) => {
	let githubUsernames = {
		Mick: "symbolpunk",
		Raul: "rauljordan",
		Terence: "terencechain"
	}

	let buildAuthorBadge = function (author) {
		return (
			<a class="header-badge" href={`https://github.com/${githubUsernames[author]}`}>
				<span class="badge-avatar" style={{ backgroundImage: "url('https://avatars.githubusercontent.com/" + githubUsernames[author] + "')" }}></span>
				<span class="badge-label">{author}</span>
			</a>
		)
	}

	return (
		<BrowserOnly>
			{() =>
				<div class="header-badges">
					{authors.split(',').map(buildAuthorBadge)}
					<a class="header-badge" href={`https://github.com/prysmaticlabs/documentation/issues/new?title=Docs update request: ${new URL(window.location.href).pathname}&body=Source: ${window.location.href}%0A%0ARequest: (how can we help?)`}>
						<span class="badge-avatar" style={{ backgroundImage: "url('https://i.imgur.com/B0bkhqa.png')" }}></span>
						<span class="badge-label">Request an update</span>
					</a>
				</div>
			}
		</BrowserOnly>
	);
};