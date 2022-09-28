
import { of } from 'rxjs';
import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy: any

  beforeEach(() => {

    httpClientSpy = {
      get: jest.fn()
    }

    service = new FakeService(httpClientSpy)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test getData()', () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/1'

    const mockResponse = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(mockResponse))

    service.getData()

    expect(httpClientSpy.get).toBeCalledTimes(1)

  });


  it('test getData()', (done) => {

    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/1'

    const mockResponse = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(mockResponse))

    service.getData().subscribe({
      next: data => {
        expect(data).toEqual(mockResponse)
        done()
      },
      error: done.fail
    })

  });

});
