import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

const beforeScreenshot = (page) => page.$('#root > *');
const getScreenshotOptions = ({ context, url }) => {
  return {
    encoding: 'base64', // encoding: 'base64' is a property required by puppeteer
    fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.,
  };
};

// function to customize the snapshot location
const getMatchOptions = () => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join('packages/storyshots/snapshots');
  return {
    customSnapshotsDir: snapshotPath,
    failureThreshold: 0.3,
    failureThresholdType: 'percent',
  };
};

initStoryshots({
  // your own configuration
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    // invoke the function above here
    getMatchOptions,
    getScreenshotOptions,
    beforeScreenshot
  }),
});
