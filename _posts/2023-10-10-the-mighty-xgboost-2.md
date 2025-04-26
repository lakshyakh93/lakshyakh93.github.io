---
layout: post
title: The Mighty XgBoost 2.0 is here
date: 2023-10-10 10:14:00-0400
description:
tags: ML Math
categories:
giscus_comments: false
related_posts: false
toc:
  sidebar: left
---

XGBoost is a popular and powerful machine learning library that implements gradient boosting algorithms. XGBoost 2.0 is the latest version of XGBoost, which introduces many new features and improvements. Some of the main highlights of XGBoost 2.0 are:

  * A novel feature under development, focusing on vector-leaf tree models for multi-target regression, multi-label classification, and multi-class classification. This feature allows XGBoost to construct a single tree for all targets, offering several advantages, such as preventing overfitting, smaller model sizes, and the ability to consider correlations between targets1

  * A new device parameter, replacing existing parameters like gpu_id, gpu_hist, gpu_predictor, cpu_predictor, gpu_coord_descent, and the PySpark-specific use_gpu. Users can now use the device parameter to select their preferred device for computation, simplifying the configuration process1.

  * The hist tree method is set as the default, aiming to improve model training efficiency and consistency. XGBoost 2.0 also offers initial support for the approx tree method on GPU1.

  * A new parameter, max_cached_hist_node, allowing users to limit CPU cache size for histograms. This helps prevent aggressive caching of histograms, especially in deep trees. Additionally, memory usage for hist and approx tree methods on distributed systems is reduced by half1.

  * Improved external memory support, using memory map instead of file IO logic. This improves the performance and reduces the CPU memory usage of external memory support1

  * Support for quantile regression, which can be used for tasks such as anomaly detection and uncertainty estimation1.

  * Support for federated learning, which allows users to train models on distributed data sources without compromising data privacy or security1

  * Various bug fixes and enhancements for the PySpark interface, such as GPU-based prediction, data initialization improvements, support for predicting feature contributions, Python typing support, and improved logs for training1.


Read more about XGBoost 2.0 in [this article](https://analyticsindiamag.com/xgboost-2-0-is-here/) or [this blog post](https://aibusiness.com/ml/xgboost-2-0-new-tool-for-training-better-ai-models-on-more-complex-data). You can also check out the [official documentation](https://xgboost.readthedocs.io/en/stable/) or the [GitHub repository](https://github.com/dmlc/xgboost/releases) for more details.
