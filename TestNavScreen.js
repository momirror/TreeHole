
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const MyComponent = ({ to, navigation }) => (
    <Button title={`navigate to ${to}`} onPress={() => navigation.navigate(to)} />
);

alert('test');