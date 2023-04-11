/** @format */
import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/chat/ChatContext';
import { SocketProvider } from './context/SocketContext';
import { Router } from './router/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter>
		<ChatProvider>
			<AuthProvider>
				<SocketProvider>
					<Router />
				</SocketProvider>
			</AuthProvider>
		</ChatProvider>
	</BrowserRouter>
);
