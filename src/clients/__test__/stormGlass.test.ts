import { StormGlass } from '@src/clients/StormGlass';
import axios from 'axios';
import stormGlassWeatherUnnormalizedFixture from '@test/fixtures/stormglass_unnormalized_fixture.json';
import stormGlassWeatherNormalizedFixture from '@test/fixtures/stormglass_normalized_fixture.json';
jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: stormGlassWeatherUnnormalizedFixture });

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassWeatherNormalizedFixture);
  });
});
