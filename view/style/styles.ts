import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    h1: {
        fontSize: 48,
        fontWeight: "bold",
    },
    textInput: {
        width: "100%",
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#888888",
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    textInputHint: {
        fontSize: 14,
        color: "#666666",
        paddingLeft: 4,
    },
    primaryButton: {
        backgroundColor: "#4488ee",
        color: "#ffffff",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    secondaryButton: {
        backgroundColor: "transparent",
        color: "#666666",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});