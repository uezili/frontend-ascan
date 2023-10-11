import { SignalBarsHight } from '../assets/icons/signalBarsHight';
import { SignalBarsLow } from '../assets/icons/signalBarsLow';
import { SignalBarsMiddle } from '../assets/icons/signalBarsMiddle';

export function levelIcon(level) {
	if (level == 'Baixa') {
		return <SignalBarsLow />;
	} else if (level == 'Média') {
		return <SignalBarsMiddle />;
	} else if (level == 'Alta') {
		return <SignalBarsHight />;
	}
}
