import { View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import styles from "./progressGraphStyles";



const ProgressGraph = () => {

    const data = [
        {value: 15, label: 'Mon'},
        {value: 30, label: 'Tue'},
        {value: -23, label: 'Wed'},
        {value: 40, label: 'Thu'},
        {value: -16, label: 'Fri'},
        {value: 40, label: 'Sat'},
      ];
    return (
        <View style={styles.container}>
            <LineChart

                scrollEventThrottle={16}
                initialSpacing={0}
                data={data}
                spacing={50}
                textColor1="white"
                textShiftY={-5}
                textShiftX={-10}
                textFontSize={13}
                thickness={5}
                hideRules
                yAxisColor="white"
                showVerticalLines
                verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="white"
                color="#0BA5A4"
            />
        </View>
    );
    

}

export default ProgressGraph 