import React, { useEffect } from 'react';
//Editor JS WITH TOOLS
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// import Paragraph from '@editorjs/paragraph';
import Paragraph from 'editorjs-paragraph-with-alignment';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import Delimiter from '@editorjs/delimiter';
import Alert from 'editorjs-alert';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import LinkTool from '@editorjs/link';
import AttachesTool from '@editorjs/attaches';
import Embed from '@editorjs/embed';
import SocialPost from 'editorjs-social-post-plugin';
import Table from 'editorjs-table';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Underline from '@editorjs/underline';
//Uninstall these non useable items
// import Button from 'editorjs-button';
// import Table from '@editorjs/table';
// import InlineImage from 'editorjs-inline-image';
// import SimpleImage from 'simple-image-editorjs';
// import HeaderAnchor from 'editorjs-header-with-anchor';

import styled from 'styled-components';

export const EditorContainer = styled.div``;

const Editor = () => {
	useEffect(() => {
		new EditorJS({
			placeholder: 'Let`s write an awesome story!',
			holder: 'editorjs',
			tools: {
				header: {
					class: Header,
					shortcut: 'CMD+SHIFT+H',
					config: {
						placeholder: 'Enter a header',
						levels: [2, 3, 4, 5, 6],
						defaultLevel: 4
					}
				},
				quote: {
					class: Quote,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+O',
					config: {
						quotePlaceholder: 'Enter a quote',
						captionPlaceholder: "Quote's author"
					}
				},
				linkTool: {
					class: LinkTool,
					config: {
						endpoint: `${
							!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
								? 'http://localhost:3000'
								: 'https://writevia-backend.herokuapp.com'
						}/utils/fetchUrl` // Your backend endpoint for url data fetching
					}
				},
				embed: {
					class: Embed,
					config: {
						services: {
							youtube: true
						}
					}
				},
				warning: {
					class: Warning,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+W',
					config: {
						titlePlaceholder: 'Title',
						messagePlaceholder: 'Message'
					}
				},
				alert: {
					class: Alert,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+A',
					config: {
						defaultType: 'primary',
						messagePlaceholder: 'Enter alert Message...'
					}
				},
				Marker: {
					class: Marker,
					shortcut: 'CMD+SHIFT+M'
				},
				inlineCode: {
					class: InlineCode,
					shortcut: 'CMD+SHIFT+C'
				},
				underline: {
					class: Underline,
					shortcut: 'CMD+SHIFT+U'
				},
				paragraph: {
					class: Paragraph,
					inlineToolbar: true
				},
				image: {
					class: ImageTool,
					config: {
						endpoints: {
							byFile: `${
								!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
									? 'http://localhost:3000'
									: 'https://writevia-backend.herokuapp.com'
							}/upload/image`, // Your backend file uploader endpoint
							byUrl: `${
								!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
									? 'http://localhost:3000'
									: 'https://writevia-backend.herokuapp.com'
							}/upload/urlImage` // Your endpoint that provides uploading by Url
						}
					}
				},
				attaches: {
					class: AttachesTool,
					config: {
						endpoint: `${
							!process.env.NODE_ENV || process.env.NODE_ENV === 'development'
								? 'http://localhost:3000'
								: 'https://writevia-backend.herokuapp.com'
						}/upload/file`
					}
				},
				table: {
					class: Table,
					inlineToolbar: true,
					config: {
						rows: 2,
						cols: 3
					}
				},
				socialPost: SocialPost,
				code: CodeTool,
				delimiter: Delimiter,
				list: List
			},
			onReady: () => {
				console.log('Editor.js is ready to work!');
			}
		});
	}, []);
	return <EditorContainer id='editorjs'></EditorContainer>;
};

export default Editor;
