package com.example.bbmgram.pages.home

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.bbmgram.R
import com.example.bbmgram.adapters.PostAdapter
import com.example.bbmgram.adapters.StoryAdapter
import com.example.bbmgram.databinding.FragmentHomeBinding
import com.example.bbmgram.models.Posts

class HomeFragment : Fragment() {

    private val imagePost = arrayListOf<Int>(
        R.drawable.profile,
        R.drawable.ado,
        R.drawable.profile,
        R.drawable.ado,
        R.drawable.profile,
    )

    private lateinit var _binding: FragmentHomeBinding
    private val binding get() = _binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentHomeBinding.inflate(layoutInflater, container, false)
        return binding.root
    }

    override fun onStart() {
        super.onStart()
        val dataPost = arrayListOf<Posts>()
        val storyAdapter = StoryAdapter(dataPost, requireContext())
        val postAdapter =PostAdapter(dataPost, requireContext())

        for (i in imagePost.indices) {
            val posts = Posts(
                image = imagePost[i],
                username = "AkuParis",
                profilePict = imagePost[i]
            )
            dataPost.add(posts)
        }

        binding.postRecyclerView.apply {
            adapter = postAdapter
        }

        binding.storyRecyclerView.apply {
            adapter = storyAdapter
        }
    }
}