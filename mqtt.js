const mqtt = require("mqtt");

const timeoutDuration = 10000; // Increase the timeout duration if necessary

const client = mqtt.connect({
  host: "localhost",
  port: 8883,
  username: "user",
  password: "password",
});

const timeoutId = setTimeout(() => {
  client.end(); // Close the MQTT connection if it's taking too long
  done(new Error("Timeout occurred")); // Signal the test completion with an error
}, timeoutDuration);

client.on("connect", () => {
  clearTimeout(timeoutId); // Clear the timeout as the connection is established
  console.log("Connected to MQTT broker");

  client.publish("notification_channel", "should start up successfully", () => {
    // Callback function executed when the message is published
    console.log("Message published");

    client.end(); // Close the MQTT connection
    done(); // Signal the test completion
  });
});

client.on("error", (error) => {
  clearTimeout(timeoutId); // Clear the timeout as there was an error connecting
  console.log(`Failed to connect to MQTT broker: ${error}`);
  done(error); // Signal the test completion with an error
});

var done = function () {
  console.log("Test completed.");
};
