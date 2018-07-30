import mockAxios from 'axios';
import {
  createUsers,
  deleteUsers,
  fetchUsers,
  updateUsers
} from './userService';
import { DEFAULT_API_USERS_ENDPOINT } from '../constants';

describe('User Service', () => {
  describe('fetchUsers', () => {
    beforeEach(() => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: 'OK',
          data: [ 'foo', 'bar' ]
        })
      );
    });

    afterEach(() => {
      mockAxios.get.mockClear();
    });

    it('should be defined', () => {
      expect(fetchUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(fetchUsers).toEqual(expect.any(Function));
    });

    it('should call the service Once', () => {
      fetchUsers();

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });

    it('should call the service with the expected params', () => {
      fetchUsers({
        foo: '',
        bar: ''
      });

      expect(mockAxios.get).toHaveBeenCalledWith(
        DEFAULT_API_USERS_ENDPOINT,
        {
          params: {
            foo: '',
            bar: ''
          }
        }
      );
    });

    it('should return users from the service', async () => {
      const result = await fetchUsers();

      expect(result.data).toEqual([ 'foo', 'bar' ]);
    });
    
    it('should call the service without any params', () => {
      fetchUsers();

      expect(mockAxios.get).toHaveBeenCalledWith(
        DEFAULT_API_USERS_ENDPOINT,
        {
          params: {}
        }
      );
    });
  });

  describe('createUsers', () => {
    beforeEach(() => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: 'OK',
          data: [ 'id' ]
        })
      );
    });

    afterEach(() => {
      mockAxios.post.mockClear();
    });

    it('should be defined', () => {
      expect(createUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(createUsers).toEqual(expect.any(Function));
    });

    it('should call the service with the expected params', () => {
      createUsers({
        foo: '',
        bar: ''
      });

      expect(mockAxios.post).toHaveBeenCalledWith(
        DEFAULT_API_USERS_ENDPOINT,
        {
          foo: '',
          bar: ''
        });
    });

    it('should call the service without any data', () => {
      createUsers();

      expect(mockAxios.post).toHaveBeenCalledWith(DEFAULT_API_USERS_ENDPOINT, {} );
    });
  });

  describe('updateUsers', () => {
    beforeEach(() => {
      mockAxios.put.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: 'OK',
          data: [ 'id' ]
        })
      );
    });

    afterEach(() => {
      mockAxios.put.mockClear();
    });

    it('should be defined', () => {
      expect(updateUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(updateUsers).toEqual(expect.any(Function));
    });

    it('should call the service with the expected params', () => {
      updateUsers('id', {
        foo: '',
        bar: ''
      });

      expect(mockAxios.put).toHaveBeenCalledWith(
        `${DEFAULT_API_USERS_ENDPOINT}/id`,
        {
          foo: '',
          bar: ''
        });
    });

    it('should call the service without any data', () => {
      updateUsers('id');

      expect(mockAxios.put).toHaveBeenCalledWith(`${DEFAULT_API_USERS_ENDPOINT}/id`, {} );
    });

  });

  describe('deleteUsers', () => {
    beforeEach(() => {
      mockAxios.delete.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: 'OK',
          data: [ 'id' ]
        })
      );
    });

    afterEach(() => {
      mockAxios.delete.mockClear();
    });


    it('should be defined', () => {
      expect(deleteUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(deleteUsers).toEqual(expect.any(Function));
    });

    it('should call the service Once', () => {
      deleteUsers();

      expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    });

    it('should call the service with the expected params', () => {
      deleteUsers('id');

      expect(mockAxios.delete).toHaveBeenCalledWith(`${DEFAULT_API_USERS_ENDPOINT}/id`);
    });
  });
});
