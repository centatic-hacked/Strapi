import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogElementsChart extends Schema.Component {
  collectionName: 'components_blog_elements_charts';
  info: {
    displayName: 'Chart';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    chart: Attribute.Relation<
      'blog-elements.chart',
      'oneToOne',
      'api::chart.chart'
    >;
  };
}

export interface BlogElementsText extends Schema.Component {
  collectionName: 'components_blog_elements_texts';
  info: {
    displayName: 'Text';
    icon: 'message';
    description: '';
  };
  attributes: {
    Text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ChartsBarAndDoughnutAndPieChart extends Schema.Component {
  collectionName: 'components_charts_bar_and_doughnut_and_pie_charts';
  info: {
    displayName: 'Bar & Doughnut & Pie Chart';
    description: '';
  };
  attributes: {
    borderRadius: Attribute.Decimal;
    hoverBorderRadius: Attribute.Decimal;
    BackgroundColor: Attribute.Component<'lists.color-list', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ChartsLineRadarChart extends Schema.Component {
  collectionName: 'components_charts_line_radar_charts';
  info: {
    displayName: 'Line & Radar Chart';
    description: '';
  };
  attributes: {
    Fill: Attribute.Boolean & Attribute.Required;
    BackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Tension: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    PointStyle: Attribute.Enumeration<
      [
        'circle',
        'cross',
        'crossRot',
        'dash',
        'line',
        'rect',
        'rectRounded',
        'rectRot',
        'star',
        'triangle'
      ]
    >;
    pointBackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    pointBorderColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    pointBorderWidth: Attribute.Integer;
    pointRadius: Attribute.Decimal;
    hoverBackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    pointHoverBackroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    pointHoverBackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    pointHoverBorderColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    pointHoverBorderWidth: Attribute.Decimal;
    pointHoverRadius: Attribute.Decimal;
  };
}

export interface ImageFormatImageLink extends Schema.Component {
  collectionName: 'components_image_format_image_links';
  info: {
    displayName: 'ImageLink';
    description: '';
  };
  attributes: {
    ImageURL: Attribute.String & Attribute.Required;
    AltText: Attribute.String & Attribute.Required;
  };
}

export interface ImageFormatImage extends Schema.Component {
  collectionName: 'components_image_format_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    AltText: Attribute.String & Attribute.Required;
  };
}

export interface ListsColorList extends Schema.Component {
  collectionName: 'components_lists_color_lists';
  info: {
    displayName: 'Color List';
    description: '';
  };
  attributes: {
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ListsDateList extends Schema.Component {
  collectionName: 'components_lists_date_lists';
  info: {
    displayName: 'Date List';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    DateType: Attribute.Enumeration<['weekDay', 'monthDay', 'month', 'year']> &
      Attribute.Required;
    StartDate: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '0';
        },
        string
      >;
    EndDate: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '1';
        },
        string
      >;
  };
}

export interface ListsNormalList extends Schema.Component {
  collectionName: 'components_lists_normal_lists';
  info: {
    displayName: 'Normal List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    ListItem: Attribute.Text;
  };
}

export interface ListsNumberList extends Schema.Component {
  collectionName: 'components_lists_number_lists';
  info: {
    displayName: 'Number List';
  };
  attributes: {
    Number: Attribute.BigInteger & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-elements.chart': BlogElementsChart;
      'blog-elements.text': BlogElementsText;
      'charts.bar-and-doughnut-and-pie-chart': ChartsBarAndDoughnutAndPieChart;
      'charts.line-radar-chart': ChartsLineRadarChart;
      'image-format.image-link': ImageFormatImageLink;
      'image-format.image': ImageFormatImage;
      'lists.color-list': ListsColorList;
      'lists.date-list': ListsDateList;
      'lists.normal-list': ListsNormalList;
      'lists.number-list': ListsNumberList;
    }
  }
}
