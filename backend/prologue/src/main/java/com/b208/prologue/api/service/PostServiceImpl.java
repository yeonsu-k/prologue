package com.b208.prologue.api.service;

import com.b208.prologue.api.response.github.PostGetListResponse;
import com.b208.prologue.api.response.github.PostgetResponse;
import com.b208.prologue.common.Base64Converter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements  PostService{

    private final WebClient webClient;
    private final Base64Converter base64Converter;

    @Override
    public List<String> getList(String accessToken, String gitId, String repoName) {

        List<String> result = new ArrayList<>();

        String url = "/repos/" + gitId + "/" + repoName + "/contents/";

        PostGetListResponse[] list =  webClient.get()
                .uri(url + "post")
                .headers(h -> h.setBearerAuth(accessToken))
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(PostGetListResponse[].class).block();

        for (int i = 0; i < list.length; i++){
            result.add(setItem(url, accessToken, list[i].getPath()));

        }

        return result;
    }

    public String setItem(String url, String accessToken, String path) {
        PostgetResponse item =  webClient.get()
                .uri(url + path)
                .headers(h -> h.setBearerAuth(accessToken))
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(PostgetResponse.class).block();

        StringTokenizer st = new StringTokenizer(item.getContent(),"\n");
        StringBuilder sb = new StringBuilder();

        int val = st.countTokens();

        for(int i = 0; i < val; i++){
            sb.append(st.nextToken());
        }

        String Line = "";
        try {
            Line = base64Converter.decode(sb.toString());
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return Line;
    }
}