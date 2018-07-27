import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {
  apiUrl;
  data;
  response;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://35.240.238.172/api/image';
    this.data = {};

    this.response = {};
   }

  searchImage(data) {
    let hdrs = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    data.imageData = data.imageData.replace('data:image/jpeg;base64,', '');
    return this.http.post(this.apiUrl, data, { headers: hdrs })

    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: Response) {
    return Observable.throw('err')
  }

  setImageData(data) {
    this.data.imageData = data;
  }

  setOrigSize(w, h) {
    this.data.origWidth = w;
    this.data.origHeight = h;
  }

  getDummyResults() {
    return {
      "results": false,
      "image_text": [],
      "full_matches": [],
      "similar_images": [{
        "page_url": "https://www.snopes.com/fact-check/cadbury-hiv-arrest/",
        "unix_time": 1520426192.0,
        "page_title": "FACT CHECK: Are Cadbury Products Contaminated with HIV?",
        "country": "United States",
        "page_summary": "CLAIM\n\nA worker at Cadbury plant was arrested for contaminating the company's products with HIV-infe",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://www.snopes.com/fact-check/cadbury-hiv-arrest/",
        "unix_time": 1532591855.0,
        "page_title": "FACT CHECK: Are Cadbury Products Contaminated with HIV?",
        "country": "United States",
        "page_summary": "CLAIM\n\nA worker at Cadbury plant was arrested for contaminating the company's products with HIV-infe",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://www.snopes.com/fact-check/cadbury-hiv-arrest/",
        "unix_time": 1520070577.0,
        "page_title": "FACT CHECK: Are Cadbury Products Contaminated with HIV?",
        "country": "France",
        "page_summary": "CLAIM\n\nA worker at Cadbury plant was arrested for contaminating the company's products with HIV-infe",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://africacheck.org/spot-check/hoax-alert-nigerian-bomber-didnt-infect-cadburys-chocolate-hiv/",
        "unix_time": 1520426192.0,
        "page_title": "HOAX-ALERT: Nigerian bomber didn\u2019t infect Cadbury\u2019s chocolate with HIV!",
        "country": "United States",
        "page_summary": "Did Babes Wodumo break it down on the dance floor with former South African president Jacob Zuma? An",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://africacheck.org/spot-check/hoax-alert-nigerian-bomber-didnt-infect-cadburys-chocolate-hiv/",
        "unix_time": 1532591855.0,
        "page_title": "HOAX-ALERT: Nigerian bomber didn\u2019t infect Cadbury\u2019s chocolate with HIV!",
        "country": "United States",
        "page_summary": "Did Babes Wodumo break it down on the dance floor with former South African president Jacob Zuma? An",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://africacheck.org/spot-check/hoax-alert-nigerian-bomber-didnt-infect-cadburys-chocolate-hiv/",
        "unix_time": 1520070577.0,
        "page_title": "HOAX-ALERT: Nigerian bomber didn\u2019t infect Cadbury\u2019s chocolate with HIV!",
        "country": "France",
        "page_summary": "Did Babes Wodumo break it down on the dance floor with former South African president Jacob Zuma? An",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://www.boomlive.in/cadbury-chocolates-contaminated-with-hiv-we-tell-you-why-its-fake/",
        "unix_time": 1520426192.0,
        "page_title": "Cadbury Chocolates Contaminated With HIV?: We Tell You Why It\u2019s Fake",
        "country": "United States",
        "page_summary": "CLAIM: A worker adulterated Cadbury products with HIV infected blood.\n\nRATING: False\n\nFACT: The mess",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://www.boomlive.in/cadbury-chocolates-contaminated-with-hiv-we-tell-you-why-its-fake/",
        "unix_time": 1532591855.0,
        "page_title": "Cadbury Chocolates Contaminated With HIV?: We Tell You Why It\u2019s Fake",
        "country": "United States",
        "page_summary": "CLAIM: A worker adulterated Cadbury products with HIV infected blood.\n\nRATING: False\n\nFACT: The mess",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://www.boomlive.in/cadbury-chocolates-contaminated-with-hiv-we-tell-you-why-its-fake/",
        "unix_time": 1520070577.0,
        "page_title": "Cadbury Chocolates Contaminated With HIV?: We Tell You Why It\u2019s Fake",
        "country": "France",
        "page_summary": "CLAIM: A worker adulterated Cadbury products with HIV infected blood.\n\nRATING: False\n\nFACT: The mess",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/",
        "unix_time": 1520426192.0,
        "page_title": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood-Fiction!",
        "country": "United States",
        "page_summary": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood- Fiction!\n\nSummary of eRumor:\n\nWarnings ",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/",
        "unix_time": 1532591855.0,
        "page_title": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood-Fiction!",
        "country": "United States",
        "page_summary": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood- Fiction!\n\nSummary of eRumor:\n\nWarnings ",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/",
        "unix_time": 1520070577.0,
        "page_title": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood-Fiction!",
        "country": "France",
        "page_summary": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood- Fiction!\n\nSummary of eRumor:\n\nWarnings ",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://www.thatsnonsense.com/worker-infected-cadbury-products-hiv-virus-fact-check/",
        "unix_time": 1520426192.0,
        "page_title": "Worker infected Cadbury products with HIV Virus? Fact Check",
        "country": "United States",
        "page_summary": "A silly hoax is claiming that a worker has infected various Cadbury products with the HIV virus, and",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://www.thatsnonsense.com/worker-infected-cadbury-products-hiv-virus-fact-check/",
        "unix_time": 1532591855.0,
        "page_title": "Worker infected Cadbury products with HIV Virus? Fact Check",
        "country": "United States",
        "page_summary": "A silly hoax is claiming that a worker has infected various Cadbury products with the HIV virus, and",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://www.thatsnonsense.com/worker-infected-cadbury-products-hiv-virus-fact-check/",
        "unix_time": 1520070577.0,
        "page_title": "Worker infected Cadbury products with HIV Virus? Fact Check",
        "country": "France",
        "page_summary": "A silly hoax is claiming that a worker has infected various Cadbury products with the HIV virus, and",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://thelogicalindian.com/fact-check/hiv-doesnt-spread-through-food/",
        "unix_time": 1520426192.0,
        "page_title": "News Of \u201cHIV Contaminated\u201d Cadbury, Frooti Fake; No, HIV Doesn\u2019t Spread Through Food",
        "country": "United States",
        "page_summary": "A message is being widely circulated on social media platforms like Facebook and WhatsApp which asks",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://thelogicalindian.com/fact-check/hiv-doesnt-spread-through-food/",
        "unix_time": 1532591855.0,
        "page_title": "News Of \u201cHIV Contaminated\u201d Cadbury, Frooti Fake; No, HIV Doesn\u2019t Spread Through Food",
        "country": "United States",
        "page_summary": "A message is being widely circulated on social media platforms like Facebook and WhatsApp which asks",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://thelogicalindian.com/fact-check/hiv-doesnt-spread-through-food/",
        "unix_time": 1520070577.0,
        "page_title": "News Of \u201cHIV Contaminated\u201d Cadbury, Frooti Fake; No, HIV Doesn\u2019t Spread Through Food",
        "country": "France",
        "page_summary": "A message is being widely circulated on social media platforms like Facebook and WhatsApp which asks",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://www.boomlive.in/from-cpim-vandalising-this-statue-of-rajiv-gandhi-to-cadbury-chocolates-contaminated-with-hiv-news-you-almost-believed/",
        "unix_time": 1520426192.0,
        "page_title": "From CPI(M) Vandalising This Statue Of Rajiv Gandhi To Cadbury Chocolates Contaminated With HIV: News You Almost Believed",
        "country": "United States",
        "page_summary": "Here\u2019s this week\u2019s round-up of the News You Almost Believed.\n\nA 2013 photograph showing two men vand",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://www.boomlive.in/from-cpim-vandalising-this-statue-of-rajiv-gandhi-to-cadbury-chocolates-contaminated-with-hiv-news-you-almost-believed/",
        "unix_time": 1532591855.0,
        "page_title": "From CPI(M) Vandalising This Statue Of Rajiv Gandhi To Cadbury Chocolates Contaminated With HIV: News You Almost Believed",
        "country": "United States",
        "page_summary": "Here\u2019s this week\u2019s round-up of the News You Almost Believed.\n\nA 2013 photograph showing two men vand",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://www.boomlive.in/from-cpim-vandalising-this-statue-of-rajiv-gandhi-to-cadbury-chocolates-contaminated-with-hiv-news-you-almost-believed/",
        "unix_time": 1520070577.0,
        "page_title": "From CPI(M) Vandalising This Statue Of Rajiv Gandhi To Cadbury Chocolates Contaminated With HIV: News You Almost Believed",
        "country": "France",
        "page_summary": "Here\u2019s this week\u2019s round-up of the News You Almost Believed.\n\nA 2013 photograph showing two men vand",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/screen-shot-2018-03-07-at-12-44-48-pm/",
        "unix_time": 1520426192.0,
        "page_title": "Cadbury Products HIV",
        "country": "United States",
        "page_summary": "False rumors that Cadbury products are infected with HIV circulated on social media in spring 2018.",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/screen-shot-2018-03-07-at-12-44-48-pm/",
        "unix_time": 1532591855.0,
        "page_title": "Cadbury Products HIV",
        "country": "United States",
        "page_summary": "False rumors that Cadbury products are infected with HIV circulated on social media in spring 2018.",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/screen-shot-2018-03-07-at-12-44-48-pm/",
        "unix_time": 1520070577.0,
        "page_title": "Cadbury Products HIV",
        "country": "France",
        "page_summary": "False rumors that Cadbury products are infected with HIV circulated on social media in spring 2018.",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "https://www.youtube.com/watch?v=NZ2Bpe328Go",
        "unix_time": 1520426192.0,
        "page_title": "HIV AIDS CADBURY AND SNICKER FAKE NEWS IN NEPAL",
        "country": "United States",
        "page_summary": "The interactive transcript could not be loaded.\n\nRating is available when the video has been rented.",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "https://www.youtube.com/watch?v=NZ2Bpe328Go",
        "unix_time": 1532591855.0,
        "page_title": "HIV AIDS CADBURY AND SNICKER FAKE NEWS IN NEPAL",
        "country": "United States",
        "page_summary": "The interactive transcript could not be loaded.\n\nRating is available when the video has been rented.",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "https://www.youtube.com/watch?v=NZ2Bpe328Go",
        "unix_time": 1520070577.0,
        "page_title": "HIV AIDS CADBURY AND SNICKER FAKE NEWS IN NEPAL",
        "country": "France",
        "page_summary": "The interactive transcript could not be loaded.\n\nRating is available when the video has been rented.",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }, {
        "page_url": "http://smhoaxslayer.com/hoax-hiv-infected-blood-added-packed-edibles/",
        "unix_time": 1520426192.0,
        "page_title": "Hoax: HIV infected blood added to packed edibles.",
        "country": "United States",
        "page_summary": "Spread the truth:\n\n\n\n\n\n\n\n147 Shares\n\nThis is a decade old Hoax, products and photos keep changing. T",
        "image_url": "https://www.ayupp.com/img/news/15204cadbury_product_viral.jpg"
      }, {
        "page_url": "http://smhoaxslayer.com/hoax-hiv-infected-blood-added-packed-edibles/",
        "unix_time": 1532591855.0,
        "page_title": "Hoax: HIV infected blood added to packed edibles.",
        "country": "United States",
        "page_summary": "Spread the truth:\n\n\n\n\n\n\n\n147 Shares\n\nThis is a decade old Hoax, products and photos keep changing. T",
        "image_url": "https://i1.wp.com/verifykhabar.com/wp-content/uploads/2018/03/Cadbury-HIV-arrested.jpg"
      }, {
        "page_url": "http://smhoaxslayer.com/hoax-hiv-infected-blood-added-packed-edibles/",
        "unix_time": 1520070577.0,
        "page_title": "Hoax: HIV infected blood added to packed edibles.",
        "country": "France",
        "page_summary": "Spread the truth:\n\n\n\n\n\n\n\n147 Shares\n\nThis is a decade old Hoax, products and photos keep changing. T",
        "image_url": "https://hoax-net.be/wp-content/uploads/2018/02/2018-HIV-3.jpg"
      }],
      "best_guess": ["cadbury hiv"],
      "partial_matches": [{
        "page_url": "https://www.snopes.com/fact-check/cadbury-hiv-arrest/",
        "unix_time": 1532579640.0,
        "page_title": "FACT CHECK: Are Cadbury Products Contaminated with HIV?",
        "country": "United States",
        "page_summary": "CLAIM\n\nA worker at Cadbury plant was arrested for contaminating the company's products with HIV-infe",
        "image_url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/08/pepsicrime.jpg"
      }, {
        "page_url": "https://www.snopes.com/fact-check/cadbury-hiv-arrest/",
        "unix_time": 1532573962.0,
        "page_title": "FACT CHECK: Are Cadbury Products Contaminated with HIV?",
        "country": "United States",
        "page_summary": "CLAIM\n\nA worker at Cadbury plant was arrested for contaminating the company's products with HIV-infe",
        "image_url": "https://us-east-1.tchyn.io/snopes-production/uploads/2018/02/cadburyhiv.jpg"
      }, {
        "page_url": "https://africacheck.org/spot-check/hoax-alert-nigerian-bomber-didnt-infect-cadburys-chocolate-hiv/",
        "unix_time": 1520318559.0,
        "page_title": "HOAX-ALERT: Nigerian bomber didn\u2019t infect Cadbury\u2019s chocolate with HIV!",
        "country": "United Kingdom",
        "page_summary": "Did Babes Wodumo break it down on the dance floor with former South African president Jacob Zuma? An",
        "image_url": "https://africacheck.org/wp-content/uploads/2018/03/hoaxcadbury-Cropped-2.png"
      }, {
        "page_url": "https://www.boomlive.in/cadbury-chocolates-contaminated-with-hiv-we-tell-you-why-its-fake/",
        "unix_time": 1532600471.0,
        "page_title": "Cadbury Chocolates Contaminated With HIV?: We Tell You Why It\u2019s Fake",
        "country": "United States",
        "page_summary": "CLAIM: A worker adulterated Cadbury products with HIV infected blood.\n\nRATING: False\n\nFACT: The mess",
        "image_url": "https://i2.wp.com/www.boomlive.in/wp-content/uploads/2018/03/cadbury.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/",
        "unix_time": 1520449591.0,
        "page_title": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood-Fiction!",
        "country": "United States",
        "page_summary": "Cadbury Chocolate Eggs Are Infected With HIV-Positive Blood- Fiction!\n\nSummary of eRumor:\n\nWarnings ",
        "image_url": "https://s8295.pcdn.co/wp-content/uploads/2018/03/Screen-Shot-2018-03-07-at-12.44.48-PM.png"
      }, {
        "page_url": "https://www.thatsnonsense.com/worker-infected-cadbury-products-hiv-virus-fact-check/",
        "unix_time": 1519655765.0,
        "page_title": "Worker infected Cadbury products with HIV Virus? Fact Check",
        "country": "United States",
        "page_summary": "A silly hoax is claiming that a worker has infected various Cadbury products with the HIV virus, and",
        "image_url": "https://www.thatsnonsense.com/wp-content/uploads/2018/02/cadbury-hiv-hoax.jpg"
      }, {
        "page_url": "https://www.boomlive.in/from-cpim-vandalising-this-statue-of-rajiv-gandhi-to-cadbury-chocolates-contaminated-with-hiv-news-you-almost-believed/",
        "unix_time": 1532600471.0,
        "page_title": "From CPI(M) Vandalising This Statue Of Rajiv Gandhi To Cadbury Chocolates Contaminated With HIV: News You Almost Believed",
        "country": "United States",
        "page_summary": "Here\u2019s this week\u2019s round-up of the News You Almost Believed.\n\nA 2013 photograph showing two men vand",
        "image_url": "https://i2.wp.com/www.boomlive.in/wp-content/uploads/2018/03/cadbury.jpg"
      }, {
        "page_url": "https://www.truthorfiction.com/cadbury-products-infected-hiv-blood/screen-shot-2018-03-07-at-12-44-48-pm/",
        "unix_time": 1520449591.0,
        "page_title": "Cadbury Products HIV",
        "country": "United States",
        "page_summary": "False rumors that Cadbury products are infected with HIV circulated on social media in spring 2018.",
        "image_url": "https://s8295.pcdn.co/wp-content/uploads/2018/03/Screen-Shot-2018-03-07-at-12.44.48-PM.png"
      }, {
        "page_url": "http://smhoaxslayer.com/hoax-hiv-infected-blood-added-packed-edibles/",
        "unix_time": 1532573963.0,
        "page_title": "Hoax: HIV infected blood added to packed edibles.",
        "country": "United States",
        "page_summary": "Spread the truth:\n\n\n\n\n\n\n\n147 Shares\n\nThis is a decade old Hoax, products and photos keep changing. T",
        "image_url": "https://i0.wp.com/smhoaxslayer.com/wp-content/uploads/2018/03/DXiOs6OX4AAupSG.jpg"
      }, {
        "page_url": "http://smhoaxslayer.com/hoax-hiv-infected-blood-added-packed-edibles/",
        "unix_time": 1532600499.0,
        "page_title": "Hoax: HIV infected blood added to packed edibles.",
        "country": "United States",
        "page_summary": "Spread the truth:\n\n\n\n\n\n\n\n147 Shares\n\nThis is a decade old Hoax, products and photos keep changing. T",
        "image_url": "https://i1.wp.com/smhoaxslayer.com/wp-content/uploads/2018/03/ogwuche_terrorist_in_3.jpg"
      }]
    }
  }

  searchResults() {
    //for debugging only
    //this.response = this.getDummyResults();


    if (Object.keys(this.response).length === 0) {
      this.response = JSON.parse(localStorage.getItem('fc-results'));
    }
    console.log('RESPONSE', this.response);

    let formattedResult = {
      imageData: 'http://via.placeholder.com/80x80',
      relatedText: '',
      similar_images: [],
      image_text: ''
    }

    if (this.response.full_matches && this.response.full_matches.length > 0) {
      formattedResult.similar_images.push(this.response.full_matches);
    }

    if (this.response.partial_matches && this.response.partial_matches.length > 0) {
      formattedResult.similar_images.push(this.response.partial_matches);
    }

    if (this.response.similar_images && this.response.similar_images.length > 0) {
      formattedResult.similar_images.push(this.response.similar_images);
    }

    if (this.response.best_guess && this.response.best_guess.length > 0) {
      formattedResult.relatedText = this.response.best_guess[0]
    }

    if (this.response.image_text && this.response.image_text.length > 0) {
      formattedResult.image_text = this.response.image_text[0];
    }

    formattedResult.similar_images = [].concat.apply([], formattedResult.similar_images);

    return formattedResult;
  }

  ocr(img, from) {
    return Observable.create(observer => {
      observer.next('HELLO');
      observer.complete();
    });
  }
}
