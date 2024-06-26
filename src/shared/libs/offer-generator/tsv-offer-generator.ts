import dayjs from 'dayjs';

import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import {
  generateRandomValue,
  getRandomItem,
  getRandomItems,
} from '../../helpers/index.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const MIN_GUESTS = 1;
const MAX_GUESTS = 410;

const MIN_ROOMS = 1;
const MAX_ROOMS = 8;

const MIN_RATING = 1;
const MAX_RATING = 5;
const RATING_STEP = 1;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 100;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const amenities = getRandomItems<string>(this.mockData.amenities).join(';');
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const propertyImages = getRandomItems<string>(
      this.mockData.propertyImages
    ).join(';');
    const previewImagePath = getRandomItem<string>(
      this.mockData.propertyImages
    );
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const user = getRandomItem<string>(this.mockData.users);
    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const propertyType = getRandomItem<string>(this.mockData.propertyTypes);
    const numberOfGuests = generateRandomValue(MIN_GUESTS, MAX_GUESTS);
    const numberOfRooms = generateRandomValue(MIN_ROOMS, MAX_ROOMS);
    const numberOfComments = generateRandomValue(MIN_COMMENTS, MAX_COMMENTS);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING, RATING_STEP);
    const rentalCoordinates = getRandomItem<string>(
      this.mockData.rentalCoordinates
    );

    return [
      title,
      description,
      createdDate,
      city,
      previewImagePath,
      propertyImages,
      true,
      true,
      rating,
      propertyType,
      numberOfRooms,
      numberOfGuests,
      price,
      amenities,
      user,
      numberOfComments,
      rentalCoordinates,
    ].join('\t');
  }
}
